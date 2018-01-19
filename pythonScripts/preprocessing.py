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

path = '/opt/sentinel2'
outputPathBase = '/home/s_lech05/JamaSato/IMG/'
outputPathBaseList = []
s2_directories = []

def getImageFolder():
    directories = [x[1] for x in os.walk(path)]
    non_empty_dirs = [x for x in directories if x]  # filter out empty lists
    s2_directories = non_empty_dirs[0]
    for s2 in s2_directories:
        outputPathBaseList.append(outputPathBase + s2)
        os.makedirs(outputPathBase + s2)
    imgFolderList = []
    for folder in s2_directories:
        directorieList = path + '/' + folder + "/GRANULE"
        imgFolder = directorieList + '/' + [x[1] for x in os.walk(directorieList)][0][0] + '/' + 'IMG_DATA'
        imgFolderList.append(imgFolder)
    return imgFolderList


gdalWarpBase = ["gdalwarp", "-of", "GTiff"]

imgFolderList = getImageFolder()


for path, imgFolder in zip(outputPathBaseList,imgFolderList):
    for  img in  os.listdir(imgFolder):
        sourcepath = imgFolder + '/' + img
        outputpath = path + '/' + img
        outputpath = outputpath.replace("jp2", "tif")
        gdalgdalWarp = gdalWarpBase + [sourcepath, outputpath]
        print(" ".join(gdalgdalWarp))
        subprocess.call(gdalgdalWarp)

