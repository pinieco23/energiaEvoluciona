# Generated by Django 2.1.5 on 2019-03-05 22:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('energias', '0033_auto_20190305_1448'),
    ]

    operations = [
        migrations.AlterField(
            model_name='noticia',
            name='descripcion',
            field=models.TextField(blank=True, max_length=150),
        ),
        migrations.AlterField(
            model_name='noticia',
            name='titulo',
            field=models.CharField(blank=True, max_length=80),
        ),
    ]