#!/usr/bin/env python3

import http
import requests

url = 'https://minermore.com/api/wallet?address=triplej547'

r = requests.get(url)

print(r.text)
