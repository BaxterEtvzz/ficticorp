import { google } from 'googleapis';
import { NextResponse } from 'next/server'
import { getInfo } from '../users/sheets';

const SCOPES = [
    'https://www.googleapis.com/auth/drive',
    'https://www.googleapis.com/auth/drive.file',
    'https://www.googleapis.com/auth/spreadsheets'
];

const VERSION = 'v4';

const auth = new google.auth.GoogleAuth({
    credentials: {
        client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: SCOPES
});

const sheets = google.sheets({ version: VERSION, auth });

export async function POST(req, res) {
    const idUser = await req.json();
    const data = await getInfo();
    data && data.map((item, index) => {
        if (idUser['idUser'] === item.id) {
            const startIndex = index - 1
            try {
                const batchUpdateRequest = {
                    "requests": [
                        {
                            "deleteDimension": {
                                "range": {
                                    "sheetId": process.env.SHEET_ID,
                                    "dimension": "ROWS",
                                    "startIndex": startIndex,
                                    "endIndex": index
                                }
                            }
                        },
                    ]
                };
                const response = sheets.spreadsheets.batchUpdate({
                    spreadsheetId: process.env.SPREADSHEET_ID,
                    resource: batchUpdateRequest
                });
                return response

                //eliminar row de celda
            } catch (err) {
            }
        }
    })
    return index
}