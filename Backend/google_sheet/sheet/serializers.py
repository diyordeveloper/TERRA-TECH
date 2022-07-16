from rest_framework import serializers


class SheetSerializer(serializers.Serializer):
    mail = serializers.EmailField(required=True)
    ball = serializers.IntegerField(required=True)
    full_name = serializers.CharField(required=True)
    activity_type = serializers.CharField(required=True)
    interesting_service = serializers.CharField(required=True)
    phone = serializers.IntegerField(required=True)
