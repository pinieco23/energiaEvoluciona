# Generated by Django 2.2.4 on 2019-08-06 14:30

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('energias', '0015_interes_voceroa'),
    ]

    operations = [
        migrations.AddField(
            model_name='inscripcion',
            name='int_sectora',
            field=models.ForeignKey(blank=True, default=1, on_delete=django.db.models.deletion.CASCADE, to='energias.interes_voceroa'),
            preserve_default=False,
        ),
    ]