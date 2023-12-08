/**
 * Finds ids from a list of students.
 * @param {{
 * id: Number, firstName: String, location: String
 * }[]} students - The list of students.
 * @author Tshepiso Mogoboya <https://github.com/KGiveso>
 * @returns
 */
export default function getListStudentIds(students) {
  if (students instanceof Array) {
    return students.map((student) => student.id);
  }
  return [];
}
