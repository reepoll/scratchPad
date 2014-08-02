from instagram.client import InstagramAPI

num_top = input("View top how many photos?")

api = InstagramAPI(client_id="97437151d4c9456bb6c2b36a500e93b4", client_secret="11fb88b434d94820a23e2d32dca85a43")
popular_media = api.media_popular(count=num_top)
for media in popular_media:
    print media.images['standard_resolution'].url