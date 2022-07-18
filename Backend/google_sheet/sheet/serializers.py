from rest_framework import serializers

from google_sheet.sheet.models import GoogleSheet


class SheetSerializer(serializers.ModelSerializer):
    class Meta:
        model = GoogleSheet
        fields = "__all__"