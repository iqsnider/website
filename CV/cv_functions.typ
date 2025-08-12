#let lined_section(header) = [
  *#upper(header)* #v(-0.9em) #line(length: 100%, stroke: 1.5pt)
]

// eduation
#let education_field(school, location, graduation, degree, gpa) = [  *#school*, #emph(location) #h(1fr) #emph(graduation) \
  #degree #h(1fr) #gpa
]

// experience
#let experience_field(institution, title, location, dates, supervisor) = [*#institution - #emph(title)*, #emph(location) #h(1fr) #emph(dates) \ #supervisor
]

// activiites
#let activity_field(activity, dates, position: none) = [
  #if position != none [*#activity* - *#emph(position)* #h(1fr) #emph(dates)] else [ *#activity* #h(1fr) #emph(dates)]
]

// honors
#let honor_field(honor, date) = [
  *#honor* #h(1fr) #emph(date)
]
