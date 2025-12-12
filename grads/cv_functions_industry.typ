#let lined_section(header) = [
  *#upper(text(fill:blue)[#header])* #v(-0.9em) #line(length: 100%, stroke: 0.6pt + blue)
]

// education
#let education_field(school, location, graduation, degree, gpa) = [*#degree* - #school #gpa #h(1fr) #emph(graduation)]

// experience
#let experience_field(institution, title, location, dates, list_content) = [*#institution - #emph(title)*, #emph(location) #h(1fr) #emph(dates) \ #list_content
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
