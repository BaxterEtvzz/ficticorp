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

//Create
export async function createUser(values) {
    try {
        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.SPREADSHEET_ID,
            range: 'ficticorp!A:J', //Name of the sheet and range
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [
                    [values]
                ]
            }
        })
        return response;
    } catch (error) {
        console.error('Error al crear usuario', error);
    }
    return null;
}

//Read
export async function getInfo() {
    try {
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: process.env.SPREADSHEET_ID,
            range: 'ficticorp!A:J' //Name of the sheet
        });
        // return response.data.values

        const rows = response.data.values || [];
        return rows.map((row) => ({
            id: row[0],
            timestamp: row[1],
            name: row[2],
            paternal_surname: row[3],
            maternal_surname: row[4],
            email: row[5],
            phone: row[6],
            charge: row[7],
            area: row[8],
            salary: row[9],
        }));
    } catch (error) {
        console.error('Error al obtener info', error);
        return [];
    }
}

//Delete
export async function deleteUser() {
    try {
        const batchUpdateRequest = {
            "requests": [
                {
                    "deleteDimension": {
                        "range": {
                            "sheetId": process.env.SHEET_ID,
                            "dimension": "ROWS",
                            "startIndex": 1,
                            "endIndex": 2
                        }
                    }
                },
            ]
        };
        const response = await sheets.spreadsheets.batchUpdate({
            spreadsheetId: process.env.SPREADSHEET_ID,
            resource: batchUpdateRequest
        });
        return response

        //eliminar row de celda
    } catch (err) {
        console.log(err)
    }
}