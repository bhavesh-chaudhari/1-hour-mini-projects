# pip install pyshorteners
import pyshorteners

# Take link as an input from the user
link_to_be_shortened = input("Enter the link to be shortened : ")

# creating an instance
shortener = pyshorteners.Shortener()

# shortened link
shortened_link = shortener.tinyurl.short(link_to_be_shortened)

print(shortened_link)