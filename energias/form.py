from django.forms import ModelForm

from energias.models import inscripcion, taller


class insForm(ModelForm):
    class Meta:
        model = inscripcion
        fields = ('nombres', 'apellidos', 'cedula', 'correo', 'telefono', 'servidor','entidad', 'cargo', 'taller', 'candidato', 'participar', 'interes','ciudad')


class tallerForm(ModelForm):
    class Meta:
        model = inscripcion
        fields = ('taller', 'correo')


