# Fuel Refueling Optimization Application

This application is designed to optimize fueling for drivers based on their preferences and fuel type requirements. 

## Introduction
The fuel market in Poland is subject to continuous changes. In recent years, one of the main factors affecting fuel prices in Poland has been changes in the tax system, especially the increase in excise duty on fuels that took place in 2019, as well as the ongoing armed conflict on our eastern border since February 2022. In addition, the situation in the international market and the unstable geopolitical situation, especially in the Middle East, affects fuel prices in the domestic market, resulting in a lack of stabilization. Another price-forming factor that has occurred recently is high inflation in Poland, which is only slightly balanced by market concerns about the occurrence of a recession.


Many companies engaged in fuel sales operate in Poland, which introduces significant price differentiation. Additionally, many gas stations offer various promotions and discounts, which also affects their price. Therefore, choosing the gas station at which refueling for a given car owner will be financially most advantageous can be difficult and time-consuming.

## Motivation
Fuel purchase for a car consumes a significant portion of the budgets of many Polish families, which is particularly severe in the current increase in the prices of most products. One of the more frequently used ways to optimize fuel expenses is to choose a gas station where the cost of refueling will be the lowest. This is not an easy task because, in addition to the price per liter of fuel, the cost of travel and network preferences also needs to be taken into account. Considering the frequency of refueling (on average, once a week), this task is also time-consuming. Usually, drivers have their favorite gas stations and do not check fuel prices at others, or they go to the nearest gas station or choose the first one they encounter, where the fuel price is lower than a certain amount.

## Key Aspects
- Lack of a single source providing information on prices at all gas stations. They can be collected from many different, highly dispersed websites and applications (e.g., Yanosik, Google Maps, https://cenapaliw.pl/).
- Lack of tools for calculating the costs of driving to and from gas stations.
- Prices change dynamically, so a one-time calculation of these costs is not a permanent solution.
- Each refueling person has different needs and pays attention to different aspects when choosing a gas station.
- Each car has different fuel consumption in the city and requires different fuel.

## Goal
Minimizing the total fueling cost.

Total fueling cost = refueling price + travel cost

- **Refueling price** - we want to minimize it in the context of the required type of fuel, its price, and the distance from the gas station.
- **Travel cost** - to and from the gas station, assuming that the ride will take place on the same type of fuel that the driver intends to refuel at the same price as the planned refueling.

## Criteria

- **Preferred stations** - some drivers have fuel cards for specific networks or prefer coffee from certain stations. The application will prioritize these stations if they are available.

- **Excluded stations** (when there are no preferred stations) - some drivers may boycott certain stations for reasons such as political views, quality of fuel, or past unpleasant experiences.

- **Fuel type** - the selected station must offer the fuel required by the driver. Some stations do not sell Pb98 gasoline or premium fuel.

- **Distance** - the station must be within the 20 closest to the starting point, with distance being defined as the sum of the distance to the station and the distance back to the starting point.

- **Total fueling cost** - the cost of fueling must be the lowest of all calculated costs while maintaining the other criteria.

## Problem of selecting a fuel station
The set of stations *S ∈ { 1, 2, ..., 20 }* is the closest to the starting point of the fuel station. Each station *S* has the following information:

- Current fuel prices (in Polish Zloty (PLN) per liter of fuel);

- The total distance to and from the starting point (in kilometers).

Each driver *K* enters:

- Required fuel type (*mandatory*);

- Required amount of fuel (*mandatory*);

- Fuel consumption in the city for their car (*mandatory*);

- Preferred stations (*optional*);

- Excluded stations (*optional*, only if no preferred stations are selected).

The problem is to select a station from the set S for driver K that has the lowest total fuel cost after taking into account the criteria entered by driver *K*.

### Aggregated data on fuel prices at gas stations
The data on fuel prices is collected from many different, widely dispersed websites and applications (e.g., Yanosik, Google Maps, https://cenapaliw.pl/).

### Heuristics

**Heuristic I** - We exclude stations from the set S that do not offer the fuel type entered by driver K.

**Heuristic II** - If driver K has entered preferred stations, we exclude all other stations from the set S.

**Heuristic III** - If driver K has not entered preferred stations and has entered excluded stations, we exclude from the set S all stations that have been excluded.

### Optimization algorithm

**Step 1:** We apply all three heuristics to the set S.

**Step 2:** For the remaining stations in set S, we calculate the total cost of traveling to and from the station to the starting point, taking into account the fuel price at the station, the fuel type selected by driver K, and the average city fuel consumption for the car to be fueled by driver K.

**Step 3:** We rank the stations based on the total fuel cost (from lowest to highest). If two stations have the same total fuel cost, the station with the shorter total distance will be ranked higher.
