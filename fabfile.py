from fabric.api import *
import os


PROJECT_ROOT = '/Users/frangossauro/work/Projects/bancogenital'
REMOTE_PROJECT_ROOT = '/var/www/genitalia.me'

env.hosts = ['barrabin-fc.net']
env.use_ssh_config = True

def full_backup():
    with cd(REMOTE_PROJECT_ROOT):
        run("./manage.py dbbackup")
        run("zip ../backups/bancogenital-photos.zip media/photos/*")

    print ""
    print "*"*70
    print "Backup on        ../backups   "
    print "                         -> bancogenital_photos.zip "
    print "                         -> bancogenital-%DATE%.mysql"
    print "*"*70
    print ""
    print " Extract with  unzip ../backups/bancogenital-photos.zip -d app/media/photos"
    print ""
    print ""

def deploy():
    remote_fetch_app()
    remote_restart_uwsgi()

def remote_fetch_app():
    with cd(REMOTE_PROJECT_ROOT):
        run('cd app && git pull origin master')
        run('cp -R app/static/* static/')

def remote_restart_uwsgi():
    run("uwsgi --reload /var/www/genitalia.me/reload")

def remote_testconnection():
    run('whoami')
