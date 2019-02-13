# Generated by Django 2.1.5 on 2019-02-13 13:26

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('energias', '0005_imagenes_c3'),
    ]

    operations = [
        migrations.CreateModel(
            name='contenedor_5',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titulo', models.CharField(max_length=60)),
                ('imagen', models.ImageField(blank=True, upload_to='footer-img')),
                ('fecha_creacion', models.DateTimeField(blank=True, default=datetime.datetime.now)),
                ('disponible', models.BooleanField()),
            ],
        ),
    ]
