from __future__ import print_function
import argparse
import os
import sys
import glob
import subprocess
from osgeo import gdal
from osgeo import osr
import re

path = '/home/s_lech05/JamaSato/IMG/'
outputPathBase = '/home/s_lech05/JamaSato/layer'

parser = argparse.ArgumentParser(description="Creates layer from user specified Bands ")

parser.add_argument("red",
                        help="ID for red Band",
                        required=True)
parser.add_argument("green",
                        help="ID for green Band",
                        required=True)
parser.add_argument("blue",
                        help="ID for blue band",
                        required=True)
parser.add_argument("directory",
                        help="Directory where Bands are found")
                        #required=True)
args = parser.parse_args()

print(args.red + args.green + args.blue)

''' 
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

for layerFolder in dirList[0]:
    for tif in os.listdir(path + layerFolder):
        sourcepath = path + layerFolder + '/' + tif
        outputpath = sourcepath.replace("tif", "png")
        outputpath = outputpath.replace("IMG", "layer")
        print(outputpath)
        gdalTiles = gdalTiles + [sourcepath, outputpath]
        print(" ".join(gdalTiles))
        subprocess.call(gdalTiles)
'''