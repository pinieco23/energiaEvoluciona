from django.contrib import admin

from energias.models import popup, noticia, casos_de_exito, subasta, mitos_realidad, hidrocarburo, hidraulico, para_comision, como_comision, minero_energetico, energiaEvoluciona, video, transicion,matriz, experto, redes, contenedor_5, comision, fuentes, imagenes_fuente


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
# admin.site.register(noticia)
admin.site.register(popup)