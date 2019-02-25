# Generated by Django 2.1.5 on 2019-02-22 16:39

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('energias', '0018_como_comision_para_comision'),
    ]

    operations = [
        migrations.CreateModel(
            name='hidraulico',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titulo', models.CharField(max_length=60)),
                ('imagen', models.ImageField(blank=True, upload_to='minero')),
                ('fecha_creacion', models.DateTimeField(blank=True, default=datetime.datetime.now)),
                ('disponible', models.BooleanField()),
            ],
        ),
    ]
