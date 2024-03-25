import { google } from 'googleapis';

//Create
export async function createUser(values) {
    try {
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
            },
            scopes: [
                'https://www.googleapis.com/auth/drive',
                'https://www.googleapis.com/auth/drive.file',
                'https://www.googleapis.com/auth/spreadsheets'
            ]
        });

        const sheets = google.sheets({
            version: 'v4',
            auth,
        });

        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.SPREADSHEET_ID,
            range: 'ficticorp!A:J', //Name of the sheet and range
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [
                    [107894, '24/03/2024', 'Zerch', 'Belmont', 'Hernandez', '5626939561', 'bxxx@gmail.com', 'Programador', 'marketing', '10000']
                ]
            }
        })
        return response
    } catch (err) {
        console.log(err);
    }
    return [];
}

//Read
export async function getInfo() {
    try {
        const target = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
        const jwt = new google.auth.JWT(
            process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
            null,
            (process.env.GOOGLE_SHEETS_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
            target
        );

        const sheets = google.sheets({ version: 'v4', auth: jwt });
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: process.env.SPREADSHEET_ID,
            range: 'ficticorp!A:Z' //Name of the sheet
        });
        // return response.data.values

        const rows = response.data.values;
        if (rows.length) {
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
        }
        return response
    } catch (err) {
        console.log(err);
    }
    return [];
}

//Delete
export const deleteUser = async () => {
    try {
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
            },
            scopes: [
                'https://www.googleapis.com/auth/drive',
                'https://www.googleapis.com/auth/drive.file',
                'https://www.googleapis.com/auth/spreadsheets'
            ]
        });

        const sheets = google.sheets({
            version: 'v4',
            auth,
        });

        var batchUpdateRequest = {
            "requests": [
                {
                    "deleteDimension": {
                        "range": {
                            "sheetId": process.env.SHEET_ID,
                            "dimension": "ROWS",
                            "startIndex": 3,
                            "endIndex": 4
                        }
                    }
                },
            ]
        }

        //Buscar id
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