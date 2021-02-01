import os
import sys


path1 = sys.argv[1]
path2 = sys.argv[2]

copy_name = "themed_jupyter_image"
container_name = "jupyter-lab3"

if path2[-1] != "/":
	path2 += "/"



os.system("mkdir " + copy_name)
os.system("cp -a " + path2 + ". " + copy_name + "/")
os.system("cp " + path1 + " " + copy_name + "/theme_extension/style")
os.system("docker build -t " + container_name + " " + copy_name + "/")
os.system("docker run -dp 8888:8888 " + container_name)