import pyshorteners as ps

url = input("Enter the Url: ")

u = ps.Shortener().tinyurl.short(url)

print(f'Your shortened URL is {u}')