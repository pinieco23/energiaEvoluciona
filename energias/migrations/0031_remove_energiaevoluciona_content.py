# Generated by Django 2.1.5 on 2019-03-04 14:35

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('energias', '0030_popup'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='energiaevoluciona',
            name='content',
        ),
    ]