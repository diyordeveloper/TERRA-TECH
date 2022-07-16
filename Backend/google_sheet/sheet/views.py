from django.http import JsonResponse
from googleapiclient.errors import HttpError
from rest_framework.decorators import api_view
from ..sheet.serializers import SheetSerializer
import datetime
from google_sheet.sheet.helper.google_sheet_manager import append


@api_view(['POST'])
def create_google_sheet(request):
    if request.method == "POST":
        serializer = SheetSerializer(data=request.data)
        if serializer.is_valid():
            time = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
            data = list(serializer.data.values())
            data.insert(0, time)
            data = [
                data,
            ]
            append(data=data)
            return JsonResponse(serializer.data, status=200)
        else:
            return JsonResponse(serializer.errors, status=400)
