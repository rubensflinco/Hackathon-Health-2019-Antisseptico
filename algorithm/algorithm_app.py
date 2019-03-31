#Libraries
import pandas as pd
import numpy as np
import datetime
import random
import json
import requests
from flask import Flask, url_for


# End-Point 
app = Flask(__name__)
@app.route('/classifier', methods=['GET'])
def classifier():
    gets = request.get_json()
    pacient_id = gets['pacient_id']
    outcome(pacient_id)
    return "true"

#Preprocessing

df= pd.read_csv('outcome.csv')

features = df.columns.difference(['type','birth_date','created_at_x','created_at_y',
'updated_at_x','updated_at_y','registration_completed_at','description','name_x','name_y',
'taxpayer_registry','mothers_name','gender','image_url','url','id_x','id_y','pacient_id','user_id','created_at','updated_at',
'Unnamed: 0_x', 'Unnamed: 0_y', 'user_id_x', 'user_id_y','registration_completed','Unnamed: 0',
'id_x.1', 'id_y.1'])


ft = df[features].values
outcome = df['type'].values

#Classifier

from sklearn.tree import DecisionTreeClassifier

classifier_dt = DecisionTreeClassifier(random_state=1986, criterion='entropy', max_depth=25, min_samples_leaf = 35)
classifier_dt.fit(ft, outcome)

# Receive, Predict and Save Output 

from sklearn.model_selection import cross_val_score

def outcome(pacient_id):
    get_values = requests.get('https://sepsisguardian.planetsweb.com.br/api/pacients/data/get.php?token=9f3eb59b17f92558802189384836c7cb&pacient_id='+pacient_id)
    get_value = get_values.json()
    v = get_value['resposta'][0]
    pacient_outcome = classifier_dt.predict(v.central_temperature,v.cardio_frequency,v.resp_frequency,v.total_leucocyto,v.left_deviation,
v.systolic_arterial_pressure,v.average_arterial_pressure,v.oliguria,v.creatinine,v.pao2_fio2_relation,
v.spo2,platelet,v.lactate,v.consciousness_status,v.bilirubin)
    post_value = requests.post(url='https://sepsisguardian.planetsweb.com.br/api/outcome/post.php?token=9f3eb59b17f92558802189384836c7cb',
                            headers={'content-type': 'application/json'},
                            data={  'pacient_id': pacient_id,
                                    'type': str(pacient_outcome)})
    scores_dt = cross_val_score(pacient_outcome, ft, outcome, scoring = 'accuracy', cv=5)
    print(scores_dt.mean())
    return "true"



