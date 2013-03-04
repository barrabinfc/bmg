#!/usr/bin/env python
LOCAL_SETTINGS = True

from settings import *

MROOT='/Users/frangossauro/work/Projects/bancogenital'
PROJECT_ROOT=('%s/src'  % MROOT)


#TEMPLATE_DIRS = (
#    '/var/rapp/bancogenital/templates'
#)

# Absolute filesystem path to the directory that will hold user-uploaded files.
# Example: "/home/media/media.lawrence.com/media/"
MEDIA_ROOT = ('%s/media' % PROJECT_ROOT )

# URL that handles the media served from MEDIA_ROOT. Make sure to use a
# trailing slash.
# Examples: "http://media.lawrence.com/media/", "http://example.com/media/"
MEDIA_URL = 'http://127.0.0.1:8000/media/'

# Absolute path to the directory static files should be collected to.
# Don't put anything in this directory yourself; store your static files
# in apps' "static/" subdirectories and in STATICFILES_DIRS.
# Example: "/home/media/media.lawrence.com/static/"
STATIC_ROOT = ('%s/static' % PROJECT_ROOT)

# URL prefix for static files.
# Example: "http://media.lawrence.com/static/"
STATIC_URL = 'http://127.0.0.1:8000/static/'

DBBACKUP_FILESYSTEM_DIRECTORY=('%s/backups' % MROOT)
