# Generated by Django 2.1.5 on 2019-02-20 23:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('energias', '0015_auto_20190220_1755'),
    ]

    operations = [
        migrations.AddField(
            model_name='transicion',
            name='titulo_resumen',
            field=models.CharField(default=0, max_length=60),
            preserve_default=False,
        ),
    ]