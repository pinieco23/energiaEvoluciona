# Generated by Django 2.1.5 on 2019-02-25 15:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('energias', '0021_mitos_realidad'),
    ]

    operations = [
        migrations.AddField(
            model_name='como_comision',
            name='desc_general',
            field=models.TextField(default=0),
            preserve_default=False,
        ),
    ]
