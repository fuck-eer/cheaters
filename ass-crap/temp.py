# from requests import get
# from requests.exceptions import RequestException
# from contextlib import closing
# from bs4 import BeautifulSoup
#
# # url = "https://inshorts.com/en/read"
# url = "https://cheat-it.firebaseio.com/question.json"
# response=get(url)
# # print(response.text[:500])
# html_soup=BeautifulSoup(response.text, "html.parser")
# type(html_soup)
# print(html_soup)
# for x in html_soup :
#     print(x)
# # html_soup contains the whole html page
# # print("Top TEN news are -")
# #extracting all the div elements with specific class
# # news_list=html_soup.findAll('div',class_='hoverable')
# # print(news_list)
# # #excessing the first element of news_list and parsing the a and span attribute
# # print(news_list[0])
# # first_news=news_list[0]
# # print(first_news.a.span.text)
# # print(news_list)
# # i=0
# # while i<10 :
# #     temp_news=news_list[i]
# #     print(temp_news.a.span.text)
# #     i=i+1
#
#
#
import requests
import json

url = "https://cheat-it.firebaseio.com/question.json"
url2= "https://cheat-it.firebaseio.com/answers.json"
r = requests.get(url)
r2 =  requests.get(url2)
cont = json.loads(r.content)
cont2 = json.loads(r2.content)
# print(cont)
# print(len(cont))
y=list(cont2.values())
for x in cont :
    print('question : ',cont[x]['question'])
    for z in y:
        if z['id'] == cont[x]['id'] :
         print('answer :',z['answer'])
