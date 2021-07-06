(ns cypto.events
  (:require
   [re-frame.core :as re-frame]
   [cypto.db :as db]
   [ajax.core :as ajax]
   [day8.re-frame.http-fx]
   [clojure.string :as str]
   [day8.re-frame.tracing :refer-macros [fn-traced]]))

(re-frame/reg-event-db
 ::initialize-db
 (fn-traced [_ _]
            db/default-db))


(re-frame/reg-event-db
 ::update-name
 (fn [db [_ value]]
   (assoc db :name value)))

(re-frame/reg-cofx
 :now
 (fn [cofx _data]
   (assoc cofx :now (subs (str (js/Date.)) 15 24))))


(re-frame/reg-event-fx
 ::fetch
 (fn [{:keys [db]} _]
   {:db   (assoc db :loading true)
    :http-xhrio {:method          :get
                 :uri             "https://api.binance.com/api/v3/ticker/price"
                 :timeout         8000
                 :response-format (ajax/json-response-format {:keywords? true})
                 :on-success      [::fetch-success]
                 :on-failure      [:bad-http-result]}}))


(re-frame/reg-event-fx              
 ::fetch-success
 [(re-frame/inject-cofx :now)]
 (fn [{:keys [db now]} [_ response]]                
   {:db (assoc db :data response :time now)}))

