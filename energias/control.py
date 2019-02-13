from django.shortcuts import render
import psycopg2


def inicio(request):

    con = psycopg2.connect("host='energia.cr2plyypy4at.us-east-1.rds.amazonaws.com' dbname='energias' user='presidencia' password='Warroom2019'")
    cur = con.cursor()
    cur.execute("SELECT titulo, texto, texto_boton FROM energias_contenedor_1 WHERE disponible = True;")
    c1 = cur.fetchall()

    cur.execute("SELECT imagen, nombre_boton FROM energias_imagenes_c3 WHERE disponible = True;")
    imagesc3 = cur.fetchall()

    cur.execute("SELECT titulo, texto FROM energias_contenedor_3 WHERE disponible = True;")
    c3 = cur.fetchall()

    cur.execute("SELECT nombre, cargo,  imagen FROM energias_experto WHERE disponible = True;")
    expertos = cur.fetchall()

    return render(request, 'index.html',{'c1':c1,'imagesc3':imagesc3,'c3':c3,'expertos':expertos})



def expertos(request):



    return render(request, 'expertos.html')