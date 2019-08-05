from django.contrib import admin

from energias.models import inscripcion, servidor, candidato, participar, ciudad, interes, taller, previa, banner, infografia, gas, reserva, historias,tweet, popup, noticia, casos_de_exito, subasta, mitos_realidad, hidrocarburo, hidraulico, para_comision, como_comision, minero_energetico, energiaEvoluciona, video, transicion,matriz, experto, redes, contenedor_5, comision, fuentes, imagenes_fuente

from import_export.admin import ImportExportModelAdmin


from import_export import resources


admin.site.register(energiaEvoluciona)
admin.site.register(video)
admin.site.register(transicion)
admin.site.register(matriz)
admin.site.register(experto)
admin.site.register(comision)
admin.site.register(fuentes)
admin.site.register(minero_energetico)
admin.site.register(para_comision)
admin.site.register(como_comision)
admin.site.register(hidraulico)
admin.site.register(hidrocarburo)
admin.site.register(mitos_realidad)
admin.site.register(subasta)
admin.site.register(casos_de_exito)
admin.site.register(noticia)
admin.site.register(tweet)
admin.site.register(popup)
admin.site.register(historias)
admin.site.register(gas)
admin.site.register(reserva)
admin.site.register(infografia)
admin.site.register(banner)



class InsResource(resources.ModelResource):
    class Meta:
        model =inscripcion

class insallAdmin(ImportExportModelAdmin):
    list_display = ('cedula', 'nombres', 'apellidos', 'telefono', 'ingreso_al_taller', 'salida_del_taller')
    resource_class = InsResource

admin.site.register(inscripcion, insallAdmin)

admin.site.register(servidor)
admin.site.register(candidato)
admin.site.register(participar)
admin.site.register(ciudad)
admin.site.register(interes)
admin.site.register(taller)
admin.site.register(previa)