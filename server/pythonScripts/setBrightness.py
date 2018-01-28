from osgeo import gdal
import subprocess
import argparse

selectedLayer = '/home/s_lech05/JamaSato/merged/mergedBands.png' #path of selected Layer
outputfolderTiles = '/home/s_lech05/JamaSato/merged/changedBrightnessLayer.png' #path of altered Layer

print('trying to create Layer with python')

parser = argparse.ArgumentParser(description='Creates a RGB images with three Bands.')
parser.add_argument('rvmin',
                    help='Min Value of red band')
parser.add_argument('rvmax',
                    help='Max value of red band')
parser.add_argument('gvmin',
                    help='Min value of greem band')
parser.add_argument('gvmax',
                    help='Max value of green band')
parser.add_argument('bvmin',
                    help='Min value of blue band')
parser.add_argument('bvmax',
                    help='Max value of blue band')


bandparams = parser.parse_args()
print(bandparams.dir)
# translate Layer to specified colour range
gdalTranslate = ["gdal_translate", "-scale_1", bandparams.rvmin, bandparams.rvmax, "-scale_2", bandparams.gvmin, bandparamsgvmax, "-scale_3", bandparams.bvmin, bandparamsbvmax, selectedLayer, outputfolderTiles]
print(" ".join(gdalTranslate))
subprocess.call(gdalTranslate)

#create tile Layer for easier display
gdalTiles = ["gdal2tiles.py", outputfileMerged, outputfolderTiles]
print(" ".join(gdalTiles))
subprocess.call(gdalTiles)
