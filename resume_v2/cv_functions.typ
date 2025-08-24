#let lined_section(header) = [
  *#upper(header)* #v(-0.9em) #line(length: 100%, stroke: 0.6pt)
]

// education
#let education_field(school, location, graduation, degree, gpa) = [  *#school*, #emph(location) #h(1fr) #emph(graduation) \
  #degree #h(1fr) #gpa
]

// experience
#let experience_field(institution, title, location, dates, supervisor, list_content) = [*#institution - #emph(title)*, #emph(location) #h(1fr) #emph(dates) \ #supervisor \
  #list_content
]

// activiites
#let activity_field(activity, dates, position: none, list_content: none) = [
  #if position != none [*#activity* - *#emph(position)* #h(1fr) #emph(dates)] else [ *#activity* #h(1fr) #emph(dates)]
  #if list_content != none [#list_content]
]

// honors
#let honor_field(honor, date, list_content : none) = [
  *#honor* #h(1fr) #emph(date)
  #if list_content != none [#list_content]
]
