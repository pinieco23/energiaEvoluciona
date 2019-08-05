# Generated by Django 2.2.1 on 2019-08-02 20:11

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('energias', '0011_banner'),
    ]

    operations = [
        migrations.CreateModel(
            name='candidato',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('opcion', models.CharField(max_length=10)),
            ],
        ),
        migrations.CreateModel(
            name='ciudad',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('opcion', models.CharField(max_length=10)),
            ],
        ),
        migrations.CreateModel(
            name='interes',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('opcion', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='participar',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('opcion', models.CharField(max_length=10)),
            ],
        ),
        migrations.CreateModel(
            name='previa',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('opcion', models.CharField(max_length=10)),
            ],
        ),
        migrations.CreateModel(
            name='servidor',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('opcion', models.CharField(max_length=10)),
            ],
        ),
        migrations.CreateModel(
            name='taller',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ciudad', models.CharField(max_length=100)),
                ('fecha', models.DateTimeField(default=datetime.datetime.now)),
            ],
        ),
    ]