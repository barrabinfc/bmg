from fabric.api import *
import os

PROJECT_ROOT = os.path.join( os.path.realpath( __file__ ) , '..' )
REMOTE_PROJECT_ROOT = '/var/www/genitalia.me'

env.hosts = ['barrabin-fc.net']
env.use_ssh_config = True

def full_backup():
    local("./manage.py dbbackup")
    with cd(PROJECT_ROOT):
        local("zip backups/bancogenital-photos.zip app/media/photos/*")

def prepare_deploy():
    local("./manage.py dbbackup")
    local("git add -p && git commit")
    local("git push")

def deploy():
    with cd(REMOTE_PROJECT_ROOT):
        run('cd app && git pull')

    restart_uwsgi()

def restart_uwsgi():
    run("uwsgi --reload /var/www/genitalia.me/reload")
