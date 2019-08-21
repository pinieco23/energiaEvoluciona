from django.forms import ModelForm, forms
from django import forms

from energias.models import inscripcion, taller, inscritos, formularioEmail2


class insForm(ModelForm):
    class Meta:
        model = inscritos
        fields = ('nombres', 'apellidos', 'cedula', 'correo', 'telefono', 'servidor','entidad', 'cargo', 'taller', 'candidato', 'participar', 'interes','ciudad', 'int_sectora')


class tallerForm(ModelForm):
    class Meta:
        model = inscritos
        fields = ('taller', 'correo')

class salidaForm(forms.Form):
    numero = forms.IntegerField(label='Ingrese una Cedula')


class dataForm(ModelForm):
    class Meta:
        model = formularioEmail2
        fields = ('nombre', 'telefono', 'correo', 'ciudad')


