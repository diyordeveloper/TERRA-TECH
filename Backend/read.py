from __future__ import print_function

import datetime
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

from google.oauth2 import service_account
from google_sheet.settings import SCOPES, SAMPLE_SPREADSHEET_ID

SERVICE_ACCOUNT_FILE = 'keys.json'

creds = service_account.Credentials.from_service_account_file(SERVICE_ACCOUNT_FILE, scopes=SCOPES)
RANGE = "Ответы на форму (1)!A1:G9"
service = build('sheets', 'v4', credentials=creds)
time = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")


def append(data):
    try:
        value_input_option = 'USER_ENTERED'
        insert_data_option = 'INSERT_ROWS'
        includeValuesInResponse = True
        value_range_body = {
            "values": data
        }
        raw_data = service.spreadsheets().values().append(spreadsheetId=SAMPLE_SPREADSHEET_ID, range=RANGE,
                                                          valueInputOption=value_input_option,
                                                          includeValuesInResponse=includeValuesInResponse,
                                                          insertDataOption=insert_data_option,
                                                          body=value_range_body)
        return raw_data.execute()
    except HttpError as err:
        return err


def get_data():
    try:
        sheet = service.spreadsheets()
        result = sheet.values().get(spreadsheetId=SAMPLE_SPREADSHEET_ID,
                                    range=RANGE).execute()
        return result.get('values', [])
    except HttpError as err:
        return err


try:
    data = [
        [time, "arslonsaidov300@gmail.com", 100, "Saidov Arslonbek Davron o'g'li", "Dasturchilik",
         "Python dasturchi xizmati", "998919149636"],
    ]
    append(data=data)
    for x in get_data():
        print(x)
except HttpError as err:
    print(err)
