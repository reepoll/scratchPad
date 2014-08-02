#not working

from instagram.client import InstagramAPI

q = 100
count = 10
lat = 42.35
lng = 71.06
min_timestamp = 1388534400
max_timestamp = 1388552400

api = InstagramAPI(client_id="97437151d4c9456bb6c2b36a500e93b4", client_secret="11fb88b434d94820a23e2d32dca85a43")
popular_media = api.media_search(q, count, lat, lng, min_timestamp, max_timestamp)
for media in popular_media:
    print media.images['standard_resolution'].url