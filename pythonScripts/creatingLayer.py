from __future__ import print_function
import argparse
import os
import sys
import glob
import subprocess
from distutils.version import LooseVersion
from osgeo import gdal
from osgeo import osr
import re

path = '/home/s_lech05/JamaSato/IMG'
outputPathBase = '/home/s_lech05/JamaSato/layer'


def getdirectories():
    directories = [x[1] for x in os.walk(path)]
    non_empty_dirs = [x for x in directories if x]  # filter out empty lists
    return non_empty_dirs


def createOutputName(subdataset_name_tuple):
    """
    Get output file name for sub dataset

    Takes tuple with (subdataset name, description)
    """
    subdataset_name = subdataset_name_tuple[0]

    outputname = subdataset_name.replace("/MTD_MSIL1C.", "")
    outputname = outputname.replace("xml", "")
    outputname = outputname.replace(":", "_")

    # Get UTM string from description.
    utm_str = subdataset_name_tuple[1].split(",")[-1].replace(" ", "")
    outputname = "_".join(outputname.split("_")[:-2])
    outputname = "{}_{}".format(outputname, utm_str)

    outputname = outputname + ".png"
    return outputname


dirList = getdirectories()

gdalTiles = ["gdal2tiles.py", "-w", "leaflet"]

for tif in dirList[0]:
    sourcepath = dirList[0] + '/' + tif
    outputpath = sourcepath.replace("tif", "png")
    outputpath = outputpath.replace("IMG", "layer")
    gdalTiles = gdalTiles + [sourcepath, outputpath]
    print(" ".join(gdalTiles))
    subprocess.call(gdalTiles)
