#let lined_section(header) = [
  *#upper(header)* #v(-0.9em) #line(length: 100%, stroke: 1.5pt)
]


#let education_field(school, location, graduation, degree, gpa) = [  *#school*, #emph(location) #h(1fr) #emph(graduation) \
  #degree #h(1fr) #gpa
]

#let experience_field(institution, title, location, dates, supervisor) = [*#institution - #emph(title)*, #emph(location) #h(1fr) #emph(dates) \ #supervisor
]
