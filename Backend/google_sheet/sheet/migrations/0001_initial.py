# Generated by Django 4.0.6 on 2022-07-17 07:07

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='GoogleSheet',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('mail', models.EmailField(max_length=254)),
                ('ball', models.IntegerField()),
                ('full_name', models.CharField(max_length=200)),
                ('activity_type', models.CharField(max_length=200)),
                ('interesting_service', models.CharField(max_length=200)),
                ('phone', models.IntegerField()),
            ],
        ),
    ]
