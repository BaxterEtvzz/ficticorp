import { NextResponse } from "next/server";
import { google } from 'googleapis';

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
    const { values } = await req.json();
    const promise = await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.SPREADSHEET_ID,
        range: 'ficticorp!A:J', //Name of the sheet and range
        valueInputOption: 'USER_ENTERED',
        requestBody: {
            values: [
                values
            ]
        }
    })
    const response = promise;
    console.log(response);
    return new Response(response)
}