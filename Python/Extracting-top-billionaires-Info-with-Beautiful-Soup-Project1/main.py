from bs4 import BeautifulSoup
import requests
import time

def get_billionaires_info():
    html_text = requests.get(
        "https://www.investopedia.com/articles/investing/012715/5-richest-people-world.asp"
    ).text

    billionaires = BeautifulSoup(html_text, "lxml")
    names = billionaires.find_all("span", class_="mntl-sc-block-heading__text")

    content = billionaires.find(
        "div", class_="comp article-body-content mntl-sc-page mntl-block"
    )
    info_unordered_lists_array = content.find_all("ul")

    required_array = []
    for index, ul in enumerate(info_unordered_lists_array):
        if index > 0:
            info_list = ul.find_all("li")
            billionaire_dict = {}
            for j, li in enumerate(info_list):
                if j == 0:
                    billionaire_dict["Age "] = li.text.split()[-1]
                elif j == 1:
                    billionaire_dict["Residence "] = li.text.replace("Residence: ", "")
                elif j == 2:
                    billionaire_dict["Work "] = li.text
                elif j == 3:
                    billionaire_dict["Net Worth "] = li.text.replace("Net Worth: ", "")
                elif j == 4:
                    billionaire_dict["Stake "] = li.text
                elif j == 5:
                    billionaire_dict["Other Assets "] = li.text.replace(
                        "Other Assets: ", ""
                    )
            required_array.append(billionaire_dict)

    i = 0
    name_array = []
    for index, name in enumerate(names):
        if index < len(names) - 1:
            s = name.text
            result = "".join([k for k in s if not k.isdigit() and k != "."]).strip()
            name_array.append(result)

    for index, dict in enumerate(required_array):
        updict = {}
        updict["Rank "] = index + 1
        updict["Name "] = name_array[index]
        updict.update(dict)
        required_array[index] = updict

    with open(
        "./Python/Extracting-top-billionaires-Info-with-Beautiful-Soup-Project1/billionaires_data.js",
        mode="w",
        encoding="utf-8",
    ) as data_file:
        data_file.write(f"export default {required_array}")


if __name__ == "__main__":
    while True:
        secs_in_hour = 3600
        get_billionaires_info()
        time.sleep(24 * secs_in_hour)