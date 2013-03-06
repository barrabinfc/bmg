from django.core.management.base import BaseCommand
from django.core.files.base import File
from genitalia.models import Genitalia

from django.conf import settings

import sys, uuid, os

def query_yes_no(question, default="yes"):
    """Ask a yes/no question via raw_input() and return their answer.

    "question" is a string that is presented to the user.
    "default" is the presumed answer if the user just hits <Enter>.
        It must be "yes" (the default), "no" or None (meaning
        an answer is required of the user).

    The "answer" return value is one of "yes" or "no".
    """
    valid = {"yes":True,   "y":True,  "ye":True,
             "no":False,     "n":False}
    if default == None:
        prompt = " [y/n] "
    elif default == "yes":
        prompt = " [Y/n] "
    elif default == "no":
        prompt = " [y/N] "
    else:
        raise ValueError("invalid default answer: '%s'" % default)

    while True:
        sys.stdout.write(question + prompt)
        choice = raw_input().lower()
        if default is not None and choice == '':
            return valid[default]
        elif choice in valid:
            return valid[choice]
        else:
            sys.stdout.write("Please respond with 'yes' or 'no' "\
                             "(or 'y' or 'n').\n")    

class Command(BaseCommand):
    def handle(self, *args, **kwargs):
        all_genitalias = Genitalia.objects.all()
        query_yes_no("Renaming %d photos. Proceed?" % all_genitalias.count() )

        for gen in all_genitalias:
            img = gen.image
            
            (basepath,filename) = os.path.split( img.name )
            ext                 = filename.split('.')[-1]
            
            # Rename
            new_file =     '%s/%s.%s' % (basepath, uuid.uuid4(),ext)
            full_oldname = img.path
            full_newname = os.path.normpath( os.path.join( settings.MEDIA_ROOT , new_file) )
            
            print u"Renaming %s to %s" % (img.name, new_file )
            
            # I don't need a rename, tks
            #os.rename(  full_oldname , full_newname )
            
            # Save to db as a new photo
            new_genitalia = gen
            new_genitalia.id = None
            new_genitalia.pk = None
            new_genitalia.image.save( new_file, File( open(full_oldname,'r') ) )
            #new_genitalia.image.generate_thumbs()
            #new_genitalia.save()
            
            gen.delete()
            
            print u"Saved with ID %s" % ( new_genitalia.id )
            