(ns cypto.views
  (:require
   [re-frame.core :as re-frame]
   [cypto.subs :as subs]
   [cypto.events :as events]))


(defn display-data [{:keys [price] symbol :symbol}]
  [(re-frame/inject-cofx :now)]
  [:tr {:key symbol}
   [:td symbol]
   [:td price]
   [:td :now]])

(defn main-panel []
  (let [data (re-frame/subscribe [::subs/data])]
    [:div.container
     [:button {:class "btn btn-primary container"
               :on-click #(re-frame/dispatch [::events/fetch])} "Make API Call"]
     [:table {:class "table"}
      [:thead
       [:th {:scope "coll"}
        "Symbol"]
       [:th {:scope "coll"}
        "Price"]
       [:th {:scope "coll"}
        "Time"]]
      [:tbody]
      (map display-data @data)]]))