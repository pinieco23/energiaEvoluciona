# Generated by Django 2.2.4 on 2019-08-07 01:30

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('energias', '0022_inscritos'),
    ]

    operations = [
        migrations.AlterField(
            model_name='inscritos',
            name='candidato',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='energias.candidato'),
        ),
    ]