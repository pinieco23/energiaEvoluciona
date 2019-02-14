from django.shortcuts import render
import psycopg2


def inicio(request):

    con = psycopg2.connect("host='energia.cr2plyypy4at.us-east-1.rds.amazonaws.com' dbname='energias' user='presidencia' password='Warroom2019'")
    cur = con.cursor()
    cur.execute("SELECT titulo, texto, texto_boton, imagen FROM energias_contenedor_1 WHERE disponible = True;")
    c1 = cur.fetchall()


    cur.execute("SELECT imagen, nombre_boton FROM energias_imagenes_c3 WHERE disponible = True;")
    imagesc3 = cur.fetchall()

    cur.execute("SELECT titulo, texto FROM energias_contenedor_3 WHERE disponible = True;")
    c3 = cur.fetchall()

    cur.execute("SELECT nombre, cargo,  imagen, id FROM energias_experto WHERE disponible = True ;")
    expertos = cur.fetchall()

    cur.execute("SELECT  link FROM energias_contenedor_2 WHERE disponible = True;")
    c2 = cur.fetchall()

    return render(request, 'index.html',{'c1':c1,'imagesc3':imagesc3,'c3':c3,'expertos':expertos,'c2':c2})



def expertos(request):
    con = psycopg2.connect("host='energia.cr2plyypy4at.us-east-1.rds.amazonaws.com' dbname='energias' user='presidencia' password='Warroom2019'")
    cur = con.cursor()

    cur.execute("SELECT nombre, cargo, descripcion, imagen, id, link FROM energias_experto WHERE disponible = True ORDER BY id;")
    expertos = cur.fetchall()

    cur.execute("SELECT titulo, descripcion, imagen FROM energias_comision WHERE disponible = True;")
    comision = cur.fetchall()

    return render(request, 'expertos.html',{'comision':comision, 'expertos':expertos})

def error(request):

    return render(request, 'error.html')

def fuentes(request):

    con = psycopg2.connect("host='energia.cr2plyypy4at.us-east-1.rds.amazonaws.com' dbname='energias' user='presidencia' password='Warroom2019'")
    cur = con.cursor()
    cur.execute("SELECT imagen FROM energias_fuentes WHERE disponible = True;")
    fuentes = cur.fetchall()

    return render(request, 'fuentes.html',{'fuentes':fuentes})