from django.http import JsonResponse
from rest_framework.decorators import api_view
from ..sheet.serializers import SheetSerializer
import datetime
from google_sheet.sheet.helper.google_sheet_manager import append


@api_view(['POST'])
def create_google_sheet(request):
    if request.method == "POST":

        serializer = SheetSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            time = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
            data = list(serializer.data.values())
            data.pop(0)
            data.insert(0, time)
            
            data = [
                data,
            ]
            print(data)
            append(data=data)
            data = JsonResponse(serializer.data, status=200)
            return data
        else:
            return JsonResponse(serializer.errors, status=400)
