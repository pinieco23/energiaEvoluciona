# Generated by Django 2.2.4 on 2019-08-06 14:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('energias', '0013_inscripcion'),
    ]

    operations = [
        migrations.AddField(
            model_name='inscripcion',
            name='vocero_confirmaciona',
            field=models.BooleanField(blank=True, null=True),
        ),
    ]