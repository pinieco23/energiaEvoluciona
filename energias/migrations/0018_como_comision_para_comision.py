# Generated by Django 2.1.5 on 2019-02-22 15:41

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('energias', '0017_minero_energetico'),
    ]

    operations = [
        migrations.CreateModel(
            name='como_comision',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titulo', models.CharField(max_length=60)),
                ('descripcion', models.TextField()),
                ('fecha_creacion', models.DateTimeField(blank=True, default=datetime.datetime.now)),
                ('disponible', models.BooleanField()),
            ],
        ),
        migrations.CreateModel(
            name='para_comision',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titulo', models.CharField(max_length=60)),
                ('descripcion', models.TextField()),
                ('fecha_creacion', models.DateTimeField(blank=True, default=datetime.datetime.now)),
                ('disponible', models.BooleanField()),
            ],
        ),
    ]
