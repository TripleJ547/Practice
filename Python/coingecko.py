#!/usr/bin/env python3

import http
import requests

url = 'https://minermore.com/api/wallet'

r = requests.get(url,
                 data={"address": "triplej547"})

print(r.json())
