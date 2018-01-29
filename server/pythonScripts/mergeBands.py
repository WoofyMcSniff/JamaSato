from osgeo import gdal
import subprocess
import argparse
import urllib
import os

outputfileMerged = '/home/s_lech05/JamaSato/merged/mergedBands.png'
outputfolderTiles = '/home/s_lech05/JamaSato/merged/mergedBandsLayer.png'

print('trying to create Layer with python')

parser = argparse.ArgumentParser(description='Creates a RGB images with three Bands.')
parser.add_argument('red',
                    help='path to Band which should be interpreted as red')
parser.add_argument('green',
                    help='path to Band which should be interpreted as green')
parser.add_argument('blue',
                    help='path to Band which should be interpreted as blue')
parser.add_argument('dir',
                    help='Directory where img are stored')


bandparams = parser.parse_args()
print(bandparams.dir)

for file in os.listdir(bandparams.dir):
    if file.endswith(bandparams.red + ".png"):
        red = file
    elif file.endswith(bandparams.red + "_60m.png"):
        red = file
    elif file.endswith(bandparams.red + "_20m.png"):
        red = file
    elif file.endswith(bandparams.red + "_10m.png"):
        red = file

for file in os.listdir(bandparams.dir):
    if file.endswith(bandparams.green + ".png"):
        green = file
    elif file.endswith(bandparams.green + "_60m.png"):
        green = file
    elif file.endswith(bandparams.green + "_20m.png"):
        green = file
    elif file.endswith(bandparams.green + "_10m.png"):
        green = file

for file in os.listdir(bandparams.dir):
    if file.endswith(bandparams.blue + ".png"):
        blue = file
    elif file.endswith(bandparams.blue + "_60m.png"):
        blue = file
    elif file.endswith(bandparams.blue + "_20m.png"):
        blue = file
    elif file.endswith(bandparams.blue + "_10m.png"):
        blue = file



gdalMerge = ["gdal_merge.py", "-o", outputfileMerged, "-separate", "-co", "'PHOTOMETRIC=RGB'", red, green, blue]


print(" ".join(gdalMerge))
subprocess.call(gdalMerge)"-init '", bandparams.rv, bandparams.gv, bandparams.bv, "'"


gdalTiles = ["gdal2tiles.py", outputfileMerged, outputfolderTiles]
print(" ".join(gdalTiles))
subprocess.call(gdalTiles)
